import React from 'react';
import {
	PDFDownloadLink,
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Svg,
	Rect,
} from '@react-pdf/renderer';
import DocTest from './DocTest';

const MyDocument: React.FC = () => (
	<Document>
		<Page style={styles.page} size="A4">
			<View style={styles.section}>
				<Text>
					<div>This is a section within the page.</div>
					{/* <DocTest /> */}
				</Text>
			</View>
			<Svg>
				<Rect width="480" height="240" fill="#3d87fb" />
			</Svg>
			{/* <View style={styles.section}>
				<Text>This is another section within the page.</Text>
			</View> */}
		</Page>
	</Document>
);

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

export default MyDocument;
