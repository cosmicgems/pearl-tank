import { MongoClient } from "mongodb";

async function webFormHandler(req, res) {
    if (req.method == 'POST') {
        const {  fName, lName, phone, email,
            cName,
            cEmail,
            cPhone,
            cAddress,
            q1,
            q2,
            q3,
            q4,
            q5,
            q6,
            q7,
            q8,
            q9,
            q10,
            q11,
            q12,
            q13,
            q14,
            q15,
            q16,
            q17,
            q18,
            q19,
            q20,
            q21,
            q22,
            q23,
            q24,
            q25,
            q26,
            q27,
            q28,
            q29,
            q30,
            q31,
            q32,
            q33,
            q34,
            q35,
            q36,
            q37,
            q38,
            q39,
            q40,
            q41,
            q42,
            q43,
            q44} = req.body;

        if (
            !email || 
            !email.includes('@') || 
            !fName || 
            fName.trim() === '' || 
            !lName || 
            lName.trim() === '' ||
            !phone || 
            phone.trim() === '' || 
            !email || 
            email.trim() === '' ||  
            !cName || 
            !cEmail || 
            cEmail.trim() === '' || 
            !cEmail.includes('@') ||  
            !cPhone || 
            cPhone.trim() === '' 
            ){
                res.status(422).json({ message: 'Invalid input.' });
                return;
            }

            const newWebDevConsultationForm = {
                fName,
                lName,
                phone,
                email,
                cName,
                cEmail,
                cPhone,
                cAddress,
                q1,
                q2,
                q3,
                q4,
                q5,
                q6,
                q7,
                q8,
                q9,
                q10,
                q11,
                q12,
                q13,
                q14,
                q15,
                q16,
                q17,
                q18,
                q19,
                q20,
                q21,
                q22,
                q23,
                q24,
                q25,
                q26,
                q27,
                q28,
                q29,
                q30,
                q31,
                q32,
                q33,
                q34,
                q35,
                q36,
                q37,
                q38,
                q39,
                q40,
                q41,
                q42,
                q43,
                q44,
            };

            let client;

            try {
                client = await MongoClient.connect(
                    'mongodb+srv://pearl:2shimmer4@pearlbox.4kvb2tz.mongodb.net/pearlbox?retryWrites=true&w=majority'
                    );
            }   catch (error) {
                res.status(500).json({message: 'Could not connect to database.'})
                return;
            }

            const db = client.db();

            try {
                const result = await db.collection('Web Development Consultations').insertOne(newWebDevConsultationForm)
                newWebDevConsultationForm.id = result.insertedId;
            } catch (error) {
                client.close();
                res.status(500).json({message: 'Storing form failed!'});
                return;
            }


            res.status(201).json({ message: 'Successfully stored the form!', message: newWebDevConsultationForm });
    }
}

export default webFormHandler;