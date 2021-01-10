import React from 'react';
import Select from 'react-select';
import ETable from './EceTable';
import EleTable from './EleTable';
import MecTable from './MecTable';
import CivTable from './CivTable';
import MetaTable from './MetaTable';
import CheTable from './Che';
const options = [
    { value: 'Cse', label: 'COMPUTER SCIENCE' },
    { value: 'Ece', label: 'ELECTRONICS & COMM.' },
    { value: 'Ele', label: 'ELECTRICAL' },
    { value: 'Mec', label: 'MECHANICAL' },
    { value: 'Civ', label: 'CIVIL' },
    { value: 'Che', label: 'CHEMICAL' },
    { value: 'Met', label: 'METALLURGY' },
];

export default class App extends React.Component {

    state = {
        selectedOption: null,
    };
    handleChange = selectedOption => {
        this.setState({ selectedOption });

        console.log(`Option selected:`, selectedOption.value);

    };
    render() {
        const { selectedOption } = this.state;
        if (!selectedOption) {
            return (
                <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={options}
                    placeholder="--Select Branch--"
                />
            );
        }
        else if (selectedOption.value === 'Cse') {
            console.log(selectedOption.value);
            return (
                <div>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="--Select Branch--"
                    />

                </div>
            );
        }
        else if (selectedOption.value === 'Ece') {
            console.log(selectedOption.value);
            return (
                <div>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="--Select Branch--"
                    />
                    <ETable />
                </div>
            );
        }
        else if (selectedOption.value === 'Ele') {
            console.log(selectedOption.value);
            return (
                <div>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="--Select Branch--"
                    />
                    <EleTable />

                </div>
            );
        }
        else if (selectedOption.value === 'Mec') {
            console.log(selectedOption.value);
            return (
                <div>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="--Select Branch--"
                    />
                    <MecTable />
                </div>
            );
        }
        else if (selectedOption.value === 'Civ') {
            console.log(selectedOption.value);
            return (
                <div>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="--Select Branch--"
                    />
                    <CivTable />
                </div>
            );
        }
        else if (selectedOption.value === 'Che') {
            console.log(selectedOption.value);
            return (
                <div>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="--Select Branch--"
                    />
                    <CheTable />
                </div>
            );
        }
        else if (selectedOption.value === 'Met') {
            console.log(selectedOption.value);
            return (
                <div>
                    <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={options}
                        placeholder="--Select Branch--"
                    />
                    <MetaTable />
                </div>
            );
        }

    }
}