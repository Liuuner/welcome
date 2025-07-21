mkdir scaled  # Create output folder

for file in original/*.png; do
    ffmpeg -i "$file" -vf "scale=iw/1.5:ih/1.5" "scaled/$(basename "$file")"
done