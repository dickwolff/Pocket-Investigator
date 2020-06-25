
echo "Delete contents of WWW directory."
rm -rf ./www/*

echo "Copy Angular app to WWW directory."
cp -R ../Game/dist/* ./www