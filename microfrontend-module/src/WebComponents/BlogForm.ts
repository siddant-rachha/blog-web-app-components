import r2wc from '@r2wc/react-to-web-component';
import { BlogForm } from '../ModuleComponents/BlogForm/BlogForm';

const BlogFormWC = r2wc(BlogForm, {
  props: {
    desc: 'string',
    name: 'string',
    title: 'string',
    imageUrl: 'string',
    resetForm: 'boolean',
  },
  events: { handleFormSubmit: { bubbles: true } },
});

customElements.define('blog-form', BlogFormWC);
