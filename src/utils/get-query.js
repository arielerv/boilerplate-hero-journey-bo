import { useLocation } from 'react-router-dom';

const getQuery = () => new URLSearchParams(useLocation().search);

export default getQuery;
