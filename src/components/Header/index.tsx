import * as React from 'react';
import * as classnames from 'classnames'


const styles = require('./index.scss')

export const HeaderComponent = (): JSX.Element => (
    <div className={classnames(styles.header)}>header</div>
)