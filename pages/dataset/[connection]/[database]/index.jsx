import { useRouter } from 'next/router'


const DatabaseIndex = () => {
    const router = useRouter()
    return <h1>Database index: {router.query.database}</h1>
}

export default DatabaseIndex;
