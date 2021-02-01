import React from 'react';

// Import all stylesheets
import '@wfp/ui/src/globals/scss/styles.scss';
import Course from './course';

export default class CourseList extends React.Component {

    render() {
        let listaCursos = [];
        listaCursos.push({ name: "ClimaFami", content: "Este es un contenido nuevo" });
        listaCursos.push({ name: "EquiFami", content: "" });
        listaCursos.push({ name: "RiesgoFamis", content: "" });
        return (
            <div class="wfp--wrapper wfp--wrapper--width-lg wfp--wrapper--spacing-md">
                <div class="row">
                    {
                        listaCursos.map(curso => {
                            return <div class="col-lg-3"><div class="box"><Course name={curso.name} content={curso.content} /></div></div>
                        })
                    }
                </div>
            </div>
        );
    }
}
