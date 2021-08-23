"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bXvdlTokensTokens = exports.bXvdlTokensFonts = void 0;
/**
 * This code was generated by Diez version 10.6.0.
 * Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 */
const prefabs_1 = require("@diez/prefabs");
const bXvdlTokensColors = {
    alertYellowAlert: prefabs_1.Color.rgba(255, 226, 124, 1),
    alertYellowAir: prefabs_1.Color.rgba(255, 232, 150, 1),
    greedBook: prefabs_1.Color.rgba(64, 141, 92, 1),
    greedLight: prefabs_1.Color.rgba(239, 250, 243, 1),
    greedAlert: prefabs_1.Color.rgba(125, 213, 157, 1),
    alertYellowNice: prefabs_1.Color.rgba(255, 238, 177, 1),
    alertYellowCloud: prefabs_1.Color.rgba(255, 246, 216, 1),
    alertYellowBlank: prefabs_1.Color.rgba(255, 252, 242, 1),
    alertYellowBrown: prefabs_1.Color.rgba(224, 195, 92, 1),
    alertYellowGold: prefabs_1.Color.rgba(153, 136, 75, 1),
    alertYellowGo: prefabs_1.Color.rgba(102, 90, 50, 1),
    redAlertApp: prefabs_1.Color.rgba(253, 38, 38, 1),
    redLand: prefabs_1.Color.rgba(254, 190, 190, 1),
    redClean: prefabs_1.Color.rgba(255, 233, 233, 1),
    redMedium: prefabs_1.Color.rgba(254, 103, 103, 1),
    redNice: prefabs_1.Color.rgba(254, 146, 146, 1),
    grisOne: prefabs_1.Color.rgba(51, 51, 51, 1),
    grisYou: prefabs_1.Color.rgba(229, 229, 229, 1),
    grisPress: prefabs_1.Color.rgba(77, 77, 77, 1),
    grisOn: prefabs_1.Color.rgba(251, 251, 251, 1),
    redBlood: prefabs_1.Color.rgba(177, 27, 27, 1),
    redUp: prefabs_1.Color.rgba(126, 19, 19, 1),
    redBlack: prefabs_1.Color.rgba(76, 11, 11, 1),
    blackTotal: prefabs_1.Color.rgba(33, 33, 33, 1),
    grisOne1: prefabs_1.Color.rgba(51, 51, 51, 1),
    grisPress1: prefabs_1.Color.rgba(77, 77, 77, 1),
    grisMistery: prefabs_1.Color.rgba(102, 102, 102, 1),
    grisPlay: prefabs_1.Color.rgba(128, 128, 128, 1),
    grisTime: prefabs_1.Color.rgba(179, 179, 179, 1),
    grisMe: prefabs_1.Color.rgba(204, 204, 204, 1),
    grisYou1: prefabs_1.Color.rgba(229, 229, 229, 1),
    grisUp: prefabs_1.Color.rgba(246, 246, 246, 1),
    blancoPress: prefabs_1.Color.rgba(255, 255, 255, 1),
    grisOn1: prefabs_1.Color.rgba(251, 251, 251, 1),
    naranjoMiles: prefabs_1.Color.rgba(255, 139, 87, 1),
    lightWay: prefabs_1.Color.rgba(39, 166, 229, 1),
    lightIce: prefabs_1.Color.rgba(85, 199, 255, 1),
    lightDrop: prefabs_1.Color.rgba(107, 206, 255, 1),
    lightGive: prefabs_1.Color.rgba(30, 129, 178, 1),
    lightDream: prefabs_1.Color.rgba(128, 213, 255, 1),
    lightWell: prefabs_1.Color.rgba(26, 111, 153, 1),
    lightOur: prefabs_1.Color.rgba(21, 92, 128, 1),
    lightSea: prefabs_1.Color.rgba(17, 74, 102, 1),
    lightEasy: prefabs_1.Color.rgba(191, 234, 255, 1),
    lightThin: prefabs_1.Color.rgba(213, 241, 255, 1),
    lightDay: prefabs_1.Color.rgba(234, 248, 255, 1),
    lightOnly: prefabs_1.Color.rgba(4, 18, 25, 1),
    blueGlam: prefabs_1.Color.rgba(71, 115, 255, 1),
    blueFlip: prefabs_1.Color.rgba(46, 89, 229, 1),
    naranjoFull: prefabs_1.Color.rgba(229, 113, 61, 1),
    naranjoGo: prefabs_1.Color.rgba(143, 71, 38, 1),
    naranjoSpace: prefabs_1.Color.rgba(153, 76, 41, 1),
    naranjoNovel: prefabs_1.Color.rgba(102, 50, 27, 1),
    naranjoWine: prefabs_1.Color.rgba(76, 38, 20, 1),
    pinkBlood: prefabs_1.Color.rgba(25, 13, 7, 1),
    pinkGum: prefabs_1.Color.rgba(255, 152, 105, 1),
    blueRock: prefabs_1.Color.rgba(92, 130, 255, 1),
    bluePlace: prefabs_1.Color.rgba(41, 79, 204, 1),
    blueFun: prefabs_1.Color.rgba(112, 146, 255, 1),
    blueMoon: prefabs_1.Color.rgba(41, 79, 204, 1),
    pinkFly: prefabs_1.Color.rgba(255, 178, 143, 1),
    pinkRubber: prefabs_1.Color.rgba(255, 190, 161, 1),
    naranjoElastic: prefabs_1.Color.rgba(255, 203, 180, 1),
    naranjoCandy: prefabs_1.Color.rgba(255, 216, 199, 1),
    naranjoRose: prefabs_1.Color.rgba(255, 229, 218, 1),
    naranjoBlank: prefabs_1.Color.rgba(255, 233, 241, 1),
    blueAir: prefabs_1.Color.rgba(133, 161, 255, 1),
    blueSoft: prefabs_1.Color.rgba(153, 177, 255, 1),
    blueNew: prefabs_1.Color.rgba(173, 193, 255, 1),
    blueShine: prefabs_1.Color.rgba(194, 208, 255, 1),
    blueClear: prefabs_1.Color.rgba(214, 224, 255, 1),
    blueCloud: prefabs_1.Color.rgba(235, 239, 255, 1),
    blueCross: prefabs_1.Color.rgba(31, 59, 153, 1),
    bluePoint: prefabs_1.Color.rgba(25, 49, 128, 1),
    blueClip: prefabs_1.Color.rgba(20, 40, 102, 1),
    blueTea: prefabs_1.Color.rgba(15, 30, 76, 1),
    naranjoSuperapp: prefabs_1.Color.rgba(25, 120, 208, 1),
    orangeSummer: prefabs_1.Color.rgba(252, 190, 105, 1),
    orangeTry: prefabs_1.Color.rgba(227, 171, 94, 1),
    orangeFruit: prefabs_1.Color.rgba(252, 196, 120, 1),
    orangePyme: prefabs_1.Color.rgba(202, 152, 84, 1),
    orangeNow: prefabs_1.Color.rgba(253, 203, 135, 1),
    orangeBox: prefabs_1.Color.rgba(176, 133, 73, 1),
    orangeMake: prefabs_1.Color.rgba(253, 210, 150, 1),
    orangeTruck: prefabs_1.Color.rgba(151, 114, 63, 1),
    orangeTravel: prefabs_1.Color.rgba(253, 216, 165, 1),
    orangeGrow: prefabs_1.Color.rgba(101, 76, 42, 1),
    orangeSend: prefabs_1.Color.rgba(254, 236, 210, 1),
    orangeState: prefabs_1.Color.rgba(50, 38, 21, 1),
    orangeSkin: prefabs_1.Color.rgba(254, 242, 225, 1),
    blueSuperapp: prefabs_1.Color.rgba(51, 99, 255, 1)
};
exports.bXvdlTokensFonts = {
    RobotoLight: {
        Regular: prefabs_1.Font.fromFile("assets/BXvdlTokens.figma.contents/fonts/Roboto-Light.ttf")
    },
    Roboto: {
        Regular: prefabs_1.Font.fromFile("assets/BXvdlTokens.figma.contents/fonts/Roboto-Regular.ttf")
    }
};
const bXvdlTokensTypography = {
    caption: new prefabs_1.Typograph({ letterSpacing: 0, fontSize: 10, lineHeight: 11.71875, color: prefabs_1.Color.rgba(15, 51, 101, 1), font: exports.bXvdlTokensFonts.RobotoLight.Regular }),
    grisUp: new prefabs_1.Typograph({ letterSpacing: 0.42, fontSize: 14, lineHeight: 17.220001220703125, color: prefabs_1.Color.rgba(51, 51, 51, 1), font: exports.bXvdlTokensFonts.Roboto.Regular }),
    paragraph1App: new prefabs_1.Typograph({ letterSpacing: 0.42, fontSize: 14, lineHeight: 20.30000114440918, color: prefabs_1.Color.rgba(246, 246, 246, 1), font: new prefabs_1.Font({ name: "Lato-Regular" }) }),
    paragraph1: new prefabs_1.Typograph({ letterSpacing: 0.42, fontSize: 14, lineHeight: 22.1200008392334, color: prefabs_1.Color.rgba(246, 246, 246, 1), font: exports.bXvdlTokensFonts.Roboto.Regular })
};
exports.bXvdlTokensTokens = {
    colors: bXvdlTokensColors,
    typography: bXvdlTokensTypography
};
//# sourceMappingURL=BXvdlTokens.figma.js.map