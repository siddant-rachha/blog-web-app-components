import r2wc from '@r2wc/react-to-web-component';
import { BlogList } from '../ModuleComponents/BlogList/BlogList';

const BlogListWC = r2wc(BlogList, {
  props: {},
  events: {},
});

customElements.define('blog-list', BlogListWC);
