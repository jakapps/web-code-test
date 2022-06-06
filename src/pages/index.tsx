import { Blogs } from '../components/blogs';
import Container from "../components/container";

export default function BlogListingPage() {
  return (
    <Container>
      <Blogs limit={10} />
    </Container>
  );
}
