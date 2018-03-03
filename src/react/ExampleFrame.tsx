import * as React from 'react';

export interface ExampleFrameProps {
    title: string;
    subtitle: string;
}

export class ExampleFrame extends React.Component<ExampleFrameProps> {

    public render() {
        return <div className="container mt-5">
            <div className="card">
                <div className="card-body">

                    {/* FRAMEWORK ICON */}
                    <img src={"/res/react-icon-small.png"} className="float-right" width="30" height="30" title="Using React" alt="Using React" />

                    {/* TITLE AND STUFF */}
                    <h2 className="card-title mb-3">redux-app-examples</h2>
                    <h6 className="card-subtitle text-muted mb-2">
                        examples of <a href="https://github.com/alonrbar/redux-app">redux-app</a> together with your favorite client side framework
                            </h6>
                    <a href="/"><i><small>back to main menu</small></i></a>
                    <br /><br />
                    <h4><i>{this.props.title}</i></h4>
                    <h4><small className="text-muted">{this.props.subtitle}</small></h4>

                    {/* EXAMPLE CONTENT GOES HERE */}
                    {this.props.children}

                </div>
            </div>
        </div>;
    }
}
