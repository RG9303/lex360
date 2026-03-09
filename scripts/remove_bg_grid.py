import PIL.Image as Image
import numpy as np

def remove_grid_precisely(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = np.array(img)
    
    # We want to identify the two grid colors. 
    # Usually they are top-left-most pixels.
    # In a checkerboard, (0,0) and (0,1) are the two colors.
    c1 = data[0, 0, :3]
    c2 = data[0, 50, :3] # Pick a pixel further away in case (0,1) is too close
    
    # Let's print them for logs (visible in terminal status)
    print(f"Detected grid color 1: {c1}")
    print(f"Detected grid color 2: {c2}")

    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    
    # Tolerance for color matching
    tol = 10
    
    mask1 = (np.abs(r - c1[0]) < tol) & (np.abs(g - c1[1]) < tol) & (np.abs(b - c1[2]) < tol)
    mask2 = (np.abs(r - c2[0]) < tol) & (np.abs(g - c2[1]) < tol) & (np.abs(b - c2[2]) < tol)
    
    # Combined background mask
    bg_mask = mask1 | mask2
    
    # To be safe, we only want to apply this to the background. 
    # Usually the people are in a vertical strip in the middle.
    # But since it's a transparency grid, it might be everywhere.
    # Let's see if this works without removing too much of the people.
    # Law suites are black/dark, skin is tan/pink/brown. 
    # White shirts might be at risk if c1 or c2 is pure white.
    
    # If c1 or c2 are very bright white, we should be careful.
    # But the grid in the screenshot looks like white and light grey.
    
    data[bg_mask, 3] = 0 # Set alpha to 0
    
    new_img = Image.fromarray(data)
    new_img.save(output_path)
    print(f"Saved processed image to {output_path}")

if __name__ == "__main__":
    # Input is the image provided by the user
    input_img = "/Users/tescaelements/Desktop/lex-360-app/public/team/team-group-3.png"
    # Output to a NEW filename to bypass cache
    output_img = "/Users/tescaelements/Desktop/lex-360-app/public/team/team-group-ready.png"
    remove_grid_precisely(input_img, output_img)
