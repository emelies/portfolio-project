/* styles */
import style from './index.scss';
import resets from './styleReset.scss';

/* components */
import Head from '../../common/Head';

const DefaultLayout = (props) => {
	const title = 'Portfolio';
	const description = 'Emelie Sabel';

	return (
		<div className={(resets, style.root)}>
			<div className={style.pageWrapper}>
				<Head title={title} description={description} />
				{props.children}
			</div>
		</div>
	);
};

export default DefaultLayout;
