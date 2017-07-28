/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2017 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import PropTypes from 'prop-types';
import BpkText from 'bpk-component-text';

import { cssModules, withDefaultProps } from 'bpk-react-utils';

import STYLES from './Heading.scss';

const getClassName = cssModules(STYLES);

const HEADINGS = {
  h1: {
    mobile: withDefaultProps(
      BpkText,
      {
        textStyle: 'xl',
        tagName: 'h1',
        className: ['bpk-docs-heading', 'bpk-docs-heading--h1'].map(getClassName).join(' '),
      },
    ),
    other: withDefaultProps(
      BpkText,
      {
        textStyle: 'xxl',
        tagName: 'h1',
        className: ['bpk-docs-heading', 'bpk-docs-heading--h1'].map(getClassName).join(' '),
      },
    ),
  },
  h2: {
    mobile: withDefaultProps(
      BpkText,
      {
        textStyle: 'lg',
        tagName: 'h2',
        className: ['bpk-docs-heading', 'bpk-docs-heading--h2'].map(getClassName).join(' '),
      },
    ),
    other: withDefaultProps(
      BpkText, 'xl', 'h2', ['bpk-docs-heading', 'bpk-docs-heading--h2'].map(getClassName).join(' '),
    ),
  },
  h3: {
    mobile: withDefaultProps(
      BpkText,
      {
        textStyle: 'base',
        tagName: 'h3',
        className: ['bpk-docs-heading', 'bpk-docs-heading--h3'].map(getClassName).join(' '),
      },
    ),
    other: withDefaultProps(
      BpkText,
      {
        textStyle: 'lg',
        tagName: 'h3',
        className: ['bpk-docs-heading', 'bpk-docs-heading--h3'].map(getClassName).join(' '),
      },
    ),
  },
  h3: {
    mobile: withDefaultProps(
      BpkText,
      {
        textStyle: 'base',
        tagName: 'h3',
        className: ['bpk-docs-heading', 'bpk-docs-heading--h3'].map(getClassName).join(' '),
      },
    ),
    other: withDefaultProps(
      BpkText,
      {
        textStyle: 'base',
        tagName: 'h3',
        className: ['bpk-docs-heading', 'bpk-docs-heading--h3'].map(getClassName).join(' '),
      },
    ),
  },
  h3: {
    mobile: withDefaultProps(
      BpkText, 'base', 'h3', ['bpk-docs-heading', 'bpk-docs-heading--h3'].map(getClassName).join(' '),
    ),
    other: withDefaultProps(
      BpkText, 'lg', 'h3', ['bpk-docs-heading', 'bpk-docs-heading--h3'].map(getClassName).join(' '),
    ),
  },
  h3: {
    mobile: withDefaultProps(
      BpkText, 'base', 'h3', ['bpk-docs-heading', 'bpk-docs-heading--h3'].map(getClassName).join(' '),
    ),
    other: withDefaultProps(
      BpkText, 'lg', 'h3', ['bpk-docs-heading', 'bpk-docs-heading--h3'].map(getClassName).join(' '),
    ),
  },
  h4: withDefaultProps(BpkText, 'base', 'h4', ['bpk-docs-heading', 'bpk-docs-heading--h4'].map(getClassName).join(' ')),
  h5: withDefaultProps(BpkText, 'base', 'h5', ['bpk-docs-heading', 'bpk-docs-heading--h5'].map(getClassName).join(' ')),
  h6: withDefaultProps(BpkText, 'base', 'h6', ['bpk-docs-heading', 'bpk-docs-heading--h6'].map(getClassName).join(' ')),
};

const Heading = (props) => {
  const { level, ...rest } = props;

  return HEADINGS[level]({ ...rest });
};

Heading.propTypes = {
  level: PropTypes.oneOf(Object.keys(HEADINGS)),
};


export default Heading;
