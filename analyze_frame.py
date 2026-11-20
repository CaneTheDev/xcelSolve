from PIL import Image
import numpy as np

def find_screen_boundaries(image_path):
    """
    Analyze laptop frame to find the exact screen area boundaries
    """
    img = Image.open(image_path)
    img_array = np.array(img)
    
    print(f"Image dimensions: {img.width}x{img.height}")
    print(f"Image mode: {img.mode}")
    
    # If image has alpha channel, use it to find non-transparent areas
    if img_array.shape[2] == 4:  # RGBA
        alpha = img_array[:, :, 3]
        
        # Find where the frame actually is (non-transparent pixels)
        non_transparent = alpha > 50  # Pixels with some opacity
        
        # Get the RGB values to find dark screen area within the frame
        rgb = img_array[:, :, :3]
        brightness = np.mean(rgb, axis=2)
        
        # The screen area should be darker than the laptop frame
        # Find the darkest rectangular region
        height, width = alpha.shape
        
        # First, find the overall laptop boundaries (non-transparent region)
        rows_with_content = np.any(non_transparent, axis=1)
        cols_with_content = np.any(non_transparent, axis=0)
        
        laptop_top = np.argmax(rows_with_content)
        laptop_bottom = height - np.argmax(rows_with_content[::-1])
        laptop_left = np.argmax(cols_with_content)
        laptop_right = width - np.argmax(cols_with_content[::-1])
        
        print(f"\nLaptop frame boundaries:")
        print(f"  Top: {laptop_top}px, Bottom: {laptop_bottom}px")
        print(f"  Left: {laptop_left}px, Right: {laptop_right}px")
        
        # Now find the dark screen area within the laptop
        # Sample the frame to understand its typical brightness
        # Top bezel sample
        bezel_sample = brightness[laptop_top:laptop_top+50, laptop_left+200:laptop_right-200]
        bezel_brightness = np.mean(bezel_sample)
        
        print(f"\nBezel brightness: {bezel_brightness:.1f}")
        
        # Screen should be significantly darker
        screen_threshold = bezel_brightness * 0.3  # Screen is much darker
        
        # Find screen boundaries by looking for transition from bright (bezel) to dark (screen)
        # Top edge
        top = laptop_top
        for y in range(laptop_top, laptop_bottom):
            row_avg = np.mean(brightness[y, laptop_left+200:laptop_right-200])
            if row_avg < screen_threshold:
                top = y
                break
        
        # Bottom edge
        bottom = laptop_bottom
        for y in range(laptop_bottom-1, laptop_top, -1):
            row_avg = np.mean(brightness[y, laptop_left+200:laptop_right-200])
            if row_avg < screen_threshold:
                bottom = y
                break
        
        # Left edge
        left = laptop_left
        for x in range(laptop_left, laptop_right):
            col_avg = np.mean(brightness[top+50:bottom-50, x])
            if col_avg < screen_threshold:
                left = x
                break
        
        # Right edge  
        right = laptop_right
        for x in range(laptop_right-1, laptop_left, -1):
            col_avg = np.mean(brightness[top+50:bottom-50, x])
            if col_avg < screen_threshold:
                right = x
                break
        
        screen_width = right - left
        screen_height = bottom - top
        
        # Calculate percentages relative to full image
        left_percent = (left / width) * 100
        top_percent = (top / height) * 100
        width_percent = (screen_width / width) * 100
        height_percent = (screen_height / height) * 100
        
        print(f"\nScreen boundaries (pixels):")
        print(f"  Top: {top}px")
        print(f"  Left: {left}px")
        print(f"  Right: {right}px")
        print(f"  Bottom: {bottom}px")
        print(f"  Width: {screen_width}px")
        print(f"  Height: {screen_height}px")
        
        print(f"\nScreen boundaries (percentages):")
        print(f"  Top: {top_percent:.2f}%")
        print(f"  Left: {left_percent:.2f}%")
        print(f"  Width: {width_percent:.2f}%")
        print(f"  Height: {height_percent:.2f}%")
        
        print(f"\nCSS positioning for React component:")
        print(f"  top: [{top_percent:.2f}%]")
        print(f"  left: [{left_percent:.2f}%]")
        print(f"  width: [{width_percent:.2f}%]")
        print(f"  height: [{height_percent:.2f}%]")
        
        # Save a visualization
        visualization = img.copy()
        from PIL import ImageDraw
        draw = ImageDraw.Draw(visualization)
        # Draw rectangle around detected screen area in red
        draw.rectangle([left, top, right, bottom], outline='red', width=8)
        # Draw laptop frame boundary in blue
        draw.rectangle([laptop_left, laptop_top, laptop_right, laptop_bottom], outline='blue', width=4)
        visualization.save('screen_area_detected.png')
        print(f"\nVisualization saved as 'screen_area_detected.png'")
        print(f"  Red = detected screen area")
        print(f"  Blue = laptop frame boundary")
        
        return {
            'top': top,
            'left': left,
            'width': screen_width,
            'height': screen_height,
            'top_percent': top_percent,
            'left_percent': left_percent,
            'width_percent': width_percent,
            'height_percent': height_percent
        }
    else:
        print("Image doesn't have alpha channel.")
        return None

if __name__ == "__main__":
    laptop_frame = r"C:\Users\Cane\Documents\code\xcelSolve\public\images\device-png\Transparent Laptop Product Mockup.webp"
    boundaries = find_screen_boundaries(laptop_frame)

