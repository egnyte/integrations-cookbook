# npm install -g markdown-styles
rm -fr ./html/*
generate-md --layout github --input ./ --output ./html
mv ./html/README.html ./html/index.html
