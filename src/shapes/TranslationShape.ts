import PropTypes from 'prop-types';

const TranslationShape = PropTypes.shape({
  languageName: PropTypes.string,
  text: PropTypes.string,
  resourceName: PropTypes.string,
  resourceId: PropTypes.number.isRequired,
});

interface TranslationShape {
  languageName?: string;
  text?: string;
  resourceName?: string | null;
  resourceId: number;
}

export default TranslationShape;
