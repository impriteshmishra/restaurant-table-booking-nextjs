import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 12,
    lineHeight: 1.5,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 20,
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 10,
    color: '#888',
  },
});

const ConfirmationPdf = (formdata) => {

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Congratulations!</Text>
          <Text style={styles.subtitle}>
            Your table booking is confirmed. Thank you for choosing us!
          </Text>
        </View>

        {/* Booking Information */}
        <View style={styles.section}>
          <Text style={styles.label}>Name:</Text> <Text>{formdata.name}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Number of Guests:</Text> <Text>{formdata.guests}</Text>
        </View>
        {/* <View style={styles.section}>
          <Text style={styles.label}>Booking Date:</Text> <Text>{bookingDate}</Text>
        </View> */}
        <View style={styles.section}>
          <Text style={styles.label}>Date:</Text> <Text>{formdata.date}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Time:</Text> <Text>{formdata.time}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.label}>Customer ID:</Text> <Text>{formdata.customerId}</Text>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text>We look forward to serving you! If you have any questions, feel free to contact us.</Text>
        </View>
      </Page>
    </Document>
  );
};

export default ConfirmationPdf;
