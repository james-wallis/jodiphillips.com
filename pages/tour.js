import S3Tour from '../components/Miscellaneous/S3Tour';
import { TOUR_URL, TOUR_INDEX_URL } from '../constants';

const title = 'The Old Millhouse Gallery by ArtistJodi';
const description = 'Virtual gallery tour featuring art and design by British artist ArtistJodi.';

const Tour = () => (
    <S3Tour
        title={title}
        description={description}
        baseUrl={TOUR_URL}
        indexUrl={TOUR_INDEX_URL}
    />
)

export default Tour;
