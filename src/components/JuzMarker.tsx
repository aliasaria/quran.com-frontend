import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tooltip } from 'react-tippy';
import { JUZ_START } from '../constants';
import JuzDecoration from './JuzDecoration';
import { VerseShape } from '../shapes';

const StyledAyah = styled.div`
  margin-top: 3%;
`;

const propTypes = {
  verse: VerseShape.isRequired,
  text: PropTypes.instanceOf(Array),
};

type Props = {
  verse: VerseShape,
  text: $TsFixMe,
};

export const JuzMarker: React.SFC<Props> = ({
  verse: { chapterId, verseNumber, juzNumber },
  text,
}: Props) => {
  if (JUZ_START[chapterId] && JUZ_START[chapterId].includes(verseNumber)) {
    return (
      <Fragment>
        <b className="col-xs-1">
          <Tooltip
            arrow
            title={`${intl.formatMessage({
              id: 'juz.index.heading',
              defaultMessage: 'juz',
            })} ${juzNumber}`}
          >
            <JuzDecoration juzNumber={juzNumber} />
          </Tooltip>
        </b>
        <StyledAyah className="col-xs-11">
          <span>{text}</span>
        </StyledAyah>
      </Fragment>
    );
  }

  return <span>{text}</span>;
};

JuzMarker.propTypes = propTypes;
// TODO: why are we injecting?
export default JuzMarker;