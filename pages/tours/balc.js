import S3Tour from '../../components/Miscellaneous/S3Tour';
import { BALC_URL, BALC_INDEX_URL } from '../../constants';

const title = 'Board Ape Ladies Club by ArtistJodi';
const description = 'The virtual 3D Board Ape Ladies Club built by British artist ArtistJodi';

const BalcTourPage = () => (
    <S3Tour
        title={title}
        description={description}
        baseUrl={BALC_URL}
        indexUrl={BALC_INDEX_URL}
    />
)

export default BalcTourPage;
