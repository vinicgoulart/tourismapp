import { View, Image } from 'react-native';

export function ImageCards() {
    const Images = {
        'Link': 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.XhzvQ2VJe_WNJuOnwqMeKgHaFB%26pid%3DApi&f=1',
        'Place': 'São Paulo',
        'Posted': '02/08/2022'
    }

    return (
        <View>
            <Image source={{ uri: Images.Link }} />
        </View>
    );

}