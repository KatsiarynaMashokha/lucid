import React from 'react';
import createClass from 'create-react-class';
import { IconSelect, ClockIcon } from '../../../index';

export default createClass({
	getInitialState() {
		return {
			selectedIcons: ['item2'],
		};
	},

	isSelected(id) {
		return this.state.selectedIcons.includes(id);
	},

	handleSelect(selectedId) {
		const selectedIcons = this.state.selectedIcons;

		// if selected, then remove from list
		if (this.isSelected(selectedId)) {
			this.setState({
				selectedIcons: selectedIcons.filter(id => id !== selectedId),
			});
		} else {
			// add it to list
			this.setState({
				selectedIcons: [...selectedIcons, selectedId],
			});
		}
	},

	render() {
		return (
			<IconSelect
				kind='multiple' // default value, renders as checkboxes
				onSelect={this.handleSelect}
				items={[
					{
						id: 'item1',
						icon: <ClockIcon />,
						isSelected: this.isSelected('item1'),
						label: 'Foo Bar',
					},
					{
						id: 'item2',
						icon: <ClockIcon />,
						isSelected: this.isSelected('item2'),
						label: 'Bax Tar',
					},
				]}
			/>
		);
	},
});
