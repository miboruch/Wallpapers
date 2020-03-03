import * as Yup from 'yup';

export const QuerySchema = Yup.object().shape({
  query: Yup.string()
    .min(2, 'Enter at least 2 chars')
    .required('This field is required')
});
