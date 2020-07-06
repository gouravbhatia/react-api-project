import React from 'react';
import styles from './MenuBtn.module.css';
  
class MenuBtn extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}
  
	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}
  
	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

        if (opened){ title ='Hide Menu'; }
        else{ title ='Show Menu'; }

		return (
			<div className={styles.box}>
				<div className={styles.boxTitle} onClick={this.toggleBox}>
					{title}
				</div>
				{opened && (					
					<div class={styles.boxContent}>
						{children}
					</div>
				)}
			</div>
		);
	}
}

export default MenuBtn;