#!/bin/bash

# #############################################################################
# SAFARI BUILD CMD
# #############################################################################
#
# @description This script build a safari app extension from a chrome extension
#
# @see https://developer.apple.com/documentation/safariservices/safari_web_extensions/converting_a_web_extension_for_safari/
#
# @example . safari.sh "/path/to/Chrome_extension" "/path/to/Safari_project" "stylegpt" "pigeonposse"
#
# #############################################################################

# Paths and variables
CHROME_PATH=${1:-"/path/to/your/Chrome_extension"}
SAFARI_PATH=${2:-"/path/to/your/Safari_project"}
NAME=${3:-"stylegpt"}
COMPANY=${4:-"pigeonposse"}
LOGO_PATH=${5:-"/path/to/your/logo"}

# Convert Chrome extension to Safari
xcrun safari-web-extension-converter $CHROME_PATH \
    --project-location $SAFARI_PATH \
    --app-name $NAME \
    --bundle-identifier com.$COMPANY.$NAME \
    --force \
    --no-prompt \
    --no-open
    # --copy-resources

function create_icns(){
    
    ICONSET_PATH=$1
    ICNS_PATH=$2

    mkdir $ICONSET_PATH

    sips -z 16 16 $LOGO_PATH --out $ICONSET_PATH/icon_16x16.png
    sips -z 32 32 $LOGO_PATH --out $ICONSET_PATH/icon_32x32.png
    sips -z 128 128 $LOGO_PATH --out $ICONSET_PATH/icon_128x128.png
    sips -z 256 256 $LOGO_PATH --out $ICONSET_PATH/icon_256x256.png
    sips -z 512 512 $LOGO_PATH --out $ICONSET_PATH/icon_512x512.png
    
    iconutil -c icns -o $ICNS_PATH $ICONSET_PATH

}

function build_dmg(){

    TYPE=$1

    if [ "$TYPE" != "iOS" ] && [ "$TYPE" != "macOS" ]; then
        echo "Error: Type incorrect. Must be 'ios' or 'macOS'."
        return 1
    fi

    SAFARI_XCODEPROJECT_PATH="$SAFARI_PATH/$NAME/$NAME.xcodeproj"
    SAFARI_XCARCHIVE_PATH="$SAFARI_PATH/$NAME/$NAME.xcarchive"
    SAFARI_DMG_OUTPUT="$SAFARI_PATH/$NAME-$TYPE.dmg"
    
    SAFARI_APP_BUILD_PATH="$SAFARI_PATH/app-$TYPE"
    SAFARI_APP_BUILD_RELEASE_PATH="$SAFARI_APP_BUILD_PATH/Build/Products/Release/$NAME.app"
    ICON_NAME="icon-$TYPE"
    ICONSET_PATH=$SAFARI_PATH/$ICON_NAME.iconset
    ICNS_PATH=$SAFARI_PATH/$ICON_NAME.icns

    # Build Safari project
    xcodebuild  -project $SAFARI_XCODEPROJECT_PATH \
        -scheme "$NAME ($TYPE)" \
        -configuration Release \
        -derivedDataPath $SAFARI_APP_BUILD_PATH

    # xcodebuild archive -project $SAFARI_XCODEPROJECT_PATH \
    #     -scheme "$NAME ($TYPE)" \
    #     -configuration Release \
    #     -archivePath "$SAFARI_XCARCHIVE_PATH"

    # xcodebuild -exportArchive -archivePath $SAFARI_XCODEPROJECT_PATH \
    # -exportOptionsPlist ./safari/export-options.plist -exportPath $SAFARI_APP_BUILD_PATH

    # CREATE DMG
    hdiutil create -volname "$NAME" \
        -srcfolder "$SAFARI_APP_BUILD_RELEASE_PATH" \
        -ov -format \
        UDZO "$SAFARI_DMG_OUTPUT"
        # -imagekey zlib-level=9 -imagekey depth=8 -background "$LOGO_PATH" \

    # CREATE ICON
    # create_icns "$ICONSET_PATH" "$ICNS_PATH"
    chmod +w "$SAFARI_DMG_OUTPUT"
    SetFile -a C "$SAFARI_DMG_OUTPUT" --type 'icns' --icon "$SAFARI_APP_BUILD_RELEASE_PATH/Contents/Resources/AppIcon.icns"

}

# build_dmg "iOS"
build_dmg "macOS"