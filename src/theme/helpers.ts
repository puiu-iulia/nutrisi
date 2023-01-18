import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

export const xxs = 3;
export const xs = 8;
export const s = 12;
export const m = xs * 2; // 16
export const normal = xs * 3; // 24
export const xxl = xs * 4; // 32
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    colCenter: {
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    colCross: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    colMain: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    column: {
        flexDirection: 'column',
    },
    columnReverse: {
        flexDirection: 'column-reverse',
    },
    crossCenter: {
        alignItems: 'center',
    },
    crossEnd: {
        alignItems: 'flex-end',
    },
    crossStart: {
        alignItems: 'flex-start',
    },
    crossStretch: {
        alignItems: 'stretch',
    },
    fill: {
        flex: 1,
    },
    fillCenter: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    fillCol: {
        flex: 1,
        flexDirection: 'column',
    },
    fillColCenter: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    fillColCross: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
    },
    fillColMain: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    fillColReverse: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    fillRow: {
        flex: 1,
        flexDirection: 'row',
    },
    fillRowCenter: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    fillRowCross: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
    },
    fillRowMain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    fillRowReverse: {
        flex: 1,
        flexDirection: 'row-reverse',
    },
    fullSize: {
        height: '100%',
        width: '100%',
    },
    fullWidth: {
        width: '100%',
    },
    mainCenter: {
        justifyContent: 'center',
    },
    mainEnd: {
        justifyContent: 'flex-end',
    },
    mainSpaceAround: {
        justifyContent: 'space-around',
    },
    mainSpaceBetween: {
        justifyContent: 'space-between',
    },
    mainStart: {
        justifyContent: 'flex-start',
    },
    mirror: {
        transform: [{scaleX: -1}],
    },
    rotate90: {
        transform: [{rotate: '90deg'}],
    },
    rotate90Inverse: {
        transform: [{rotate: '-90deg'}],
    },
    row: {
        flexDirection: 'row',
    },
    rowCenter: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowCross: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    rowMain: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    rowBetween: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowReverse: {
        flexDirection: 'row-reverse',
    },
    scrollSpaceAround: {
        flexGrow: 1,
        justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
        flexGrow: 1,
        justifyContent: 'space-between',
    },
    selfStretch: {
        alignSelf: 'stretch',
    },
    textCenter: {
        textAlign: 'center',
    },
    textJustify: {
        textAlign: 'justify',
    },
    textLeft: {
        textAlign: 'left',
    },
    textRight: {
        textAlign: 'right',
    },
    topAutoMargin: {
        marginTop: 'auto',
    },
    halfInput: {
        width: '48%',
    },
    selfCenter: {
        alignSelf: 'center',
    },
    selfEnd: {
        alignSelf: 'flex-end',
    },
    wrap: {
        flexWrap: 'wrap',
    },
    bottomMargin: {
        marginBottom: normal,
    },
    topMargin: {
        marginTop: normal,
    },
    xxlBottomMargin: {
        marginBottom: xxl,
    },
    xsVerticalMargin: {
        marginVertical: xs,
    },
    sVerticalMargin: {
        marginVertical: s,
    },
    xxsBottomMargin: {
        marginBottom: xxs,
    },
    xsBottomMargin: {
        marginBottom: xs,
    },
    mBottomMargin: {
        marginBottom: m,
    },
    sBottomMargin: {
        marginBottom: s,
    },
    xxsTopMargin: {
        marginTop: xxs,
    },
    xsTopMargin: {
        marginTop: xs,
    },
    sTopMargin: {
        marginTop: s,
    },
    xxlTopMargin: {
        marginTop: xxl,
    },
    mVerticalMargin: {
        marginVertical: m,
    },
    mLeftMargin: {
        marginLeft: m,
    },
    xxsLeftMargin: {
        marginLeft: xxs,
    },
    mRightMargin: {
        marginRight: m,
    },
    mTopMargin: {
        marginTop: m,
    },
    verticalMargin: {
        marginVertical: normal,
    },
    xxlVerticalMargin: {
        marginVertical: xxl,
    },

    xsHorizontalMargin: {
        marginHorizontal: xs,
    },
    sHorizontalMargin: {
        marginHorizontal: s,
    },
    sRightMargin: {
        marginRight: s,
    },
    xsRightMargin: {
        marginRight: xs,
    },
    xxsRightMargin: {
        marginRight: xxs,
    },
    RightMargin: {
        marginRight: normal,
    },
    mHorizontalMargin: {
        marginHorizontal: m,
    },
    horizontalMargin: {
        marginHorizontal: normal,
    },
    xxlHorizontalMargin: {
        marginHorizontal: xxl,
    },

    xsHorizontalPadding: {
        paddingHorizontal: xs,
    },
    sHorizontalPadding: {
        paddingHorizontal: s,
    },
    mHorizontalPadding: {
        paddingHorizontal: m,
    },
    sRightPadding: {
        paddingRight: s,
    },
    mRightPadding: {
        paddingRight: m,
    },
    horizontalPadding: {
        paddingHorizontal: normal,
    },
    xxlHorizontalPadding: {
        paddingHorizontal: xxl,
    },
    leftPadding: {
        paddingLeft: normal,
    },
    mleftPadding: {
        paddingLeft: m,
    },

    xsVerticalPadding: {
        paddingVertical: xs,
    },
    sVerticalPadding: {
        paddingVertical: s,
    },
    mVerticalPadding: {
        paddingVertical: m,
    },
    verticalPadding: {
        paddingVertical: normal,
    },
    xxlVerticalPadding: {
        paddingVertical: xxl,
    },
    xxlTopPadding: {
        paddingTop: xxl,
    },
    xxlBottomPadding: {
        paddingBottom: xxl,
    },
    topPadding: {
        paddingTop: normal,
    },
    bottomPadding: {
        paddingBottom: normal,
    },
    padding: {
        padding: normal,
    },
    mPadding: {
        padding: m,
    },
    mMargin: {
        margin: m,
    },
    mBottomPadding: {
        paddingBottom: m
    }
});
