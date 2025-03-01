import r2wc from '@r2wc/react-to-web-component';
import { BlogPage } from '../ModuleComponents/BlogPage/BlogPage';

const BlogPageWC = r2wc(BlogPage, {
  props: {},
  events: {},
});

customElements.define('blog-page', BlogPageWC);
