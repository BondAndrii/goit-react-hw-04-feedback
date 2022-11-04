import React from "react";
import PropTypes from 'prop-types'
function Section({ title, trailer, children }) {
    return <section>
        <h2>{title}</h2>
        <p>{trailer}</p>
        {children}
        </section>
};
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};
export default Section;