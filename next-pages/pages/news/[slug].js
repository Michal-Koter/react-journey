import {useRouter} from "next/router";

export default function NewsPage() {
    const router = useRouter();
    const slug = router.query.slug;

    return (
        <h1>The {slug} page</h1>
    );
}