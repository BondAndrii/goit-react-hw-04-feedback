import React from "react";

function Section({ title, trailer, children }) {
    return <section>
        <h2>{title}</h2>
        <p>{trailer}</p>
        {children}
        </section>
};
export default Section;