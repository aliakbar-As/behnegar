import EStyleSheet from 'react-native-extended-stylesheet';

const styles = {
    fontFamily: '$REGULAR_FONT',
    color: '$GRAY_COLOR',
    fontSize: 16,
    textAlign: 'right'
};

export const htmlStyles = EStyleSheet.create({ 
    ul: styles,
    li: styles,
    a: styles,
    p: styles,
    h1: styles,
    h2: styles,
    h3: styles,
    h4: styles,
    div: styles
});
