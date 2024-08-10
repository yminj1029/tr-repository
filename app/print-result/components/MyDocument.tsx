import React from 'react';
import {
	PDFDownloadLink,
	Page,
	Text,
	View,
	Document,
	StyleSheet,
} from '@react-pdf/renderer';

const MyDocument: React.FC = () => (
	<Document>
		<Page style={styles.page}>
			<View style={styles.section}>
				<Text>This is a section within the page.</Text>
			</View>
			<View style={styles.section}>
				<Text>This is another section within the page.</Text>
			</View>
		</Page>
	</Document>
);

const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4',
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1,
	},
});

export default MyDocument;
