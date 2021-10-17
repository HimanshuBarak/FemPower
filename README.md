# FemPower

## Inspiration
Every day, some 800 million women and girls menstruate. This process can often be painful and women may need to take proper medications to alleviate themselves from this pain.  Due to the ongoing pandemic restrictions, consulting doctors has also become a very tedious task. Moreover various medicines like painkillers - have different efficacies in different phases of a women’s cycle., hence it is imperative to know the current phase, and to easily get medicines. Adding on to that improper diet during periods may result in your menstrual cycle becoming longer, shorter, heavier, absent or more painful. Hence there is a great need for predicting the proper diet and the menstrual phase. 

## What it does

FemPower has 3 major components that take care of all the problems discussed above. 
FemTrack:
1. Predict the current menstrual phase the user is going through and share the common symptoms for the same.
2. Through here researchers can also access anonymized user data that the user has opted in to share.

FemDiet
1. Personalized Diet Recommendations 
2. Keeps in mind the menstrual phase you are in before predicting diet also takes into account other medical conditions and allergies

FemMed
1.AI Automated Medicine Store for women to buy menstrual health-related medicines and products.
2. Voice Chatbot for Easier Access
3.Ranking algorithm for best products
## How we built it

Made in Django Powered by superior quality design, to intrigue users. The frontend is mainly made on full bootstrap and Night owl CDN and Bulma, providing state of the art UI. We have tried to keep the UI/UX transitions as much smooth and user friendly as possible. We decided to use Django as the core of our application as it is powered by Python. All the work is done on the very latest Django version and Python 3.7.3 . Python enabled us to use all the machine learning and recommendation technology to its full potential. The Django model gives us a total boost by letting us easily override the BASE USER model. The chatbot is a state of the art model trained via RASA NLU It is capable of differentiating between the different user Intent, which then serves as an input to the various Machine and Deep Learning Algorithms to Predict the various Diseases, Drugs and Doctors from our Database. Also we have implemented a Diet Planner System, which initially takes all the inputs from the users and then trains on an intricate machine learning model achieved by ensemble learning algorithms. These algorithms predict the exact diet plan for an entire week or month based on the users choice. It also is connected to our database, from where it estimates the different ingredients used, and the calories. The diet prediction algorithm, automatically runs every 7 days, by celery. It triggers an automatic notification to the users to re feed the data, if any changes are detected in their personal taste and body mass indexing. It is a very powerful system, which can be extended to various domains. It also amounts the total calories that will be consumed by the user for the particular recommendation, by feeding the items recommended into another Machine Learning Model. Thus, this system enables a remote diet system, which predicts accurately, keeping in mind the health and well being of all our users and the entire society.

FemTrack - It is based on a MERN Stack, which takes in the different flow, mood, pain level, days in the cycle and last menstruation date, and serves it into the backend and then predicts which phase the current person is in, namely ovulation, follicular, menstrual or luteal. We also show a dynamic graph representation of the same. We also give Diet Predictions of particular phases. 

FemMed -  has a linked up pharmacy store where, allopathy, homeopathy as well as ayurvedic medicines are available and any user can buy from. It has integrated STRIPE payment gateway for smooth checkout. It has home delivery system which would really help the older generation. It connects medicine from local pharmacy stores based on geolocation, hence reducing the delivery price to minimum.

FemDiet - There is a diet planner in our application, which helps our end-users get a customized diet plan for them. There are two part, one which takes in basic user details for profile building, which later will be utilized to connect other users with the similar likes and disliked and they can share their weekly diet plans and commencements. The second part takes in all important metrics like the person’s favorite food, diet, cuisines, nutrients he/she wants their diet to be comprised of, and also about any past medical history or diseases they suffer from. All these inputs are fed into our ML model which accurately forms a diet planner for the user, listing out all the meals with their nutrient value and ratings to the user. Using celery running in the background, the diet planner refreshed weekly giving a diversified option to the users. 

## Challenges we ran into

1. Extremely rare and few datasets available with menstruation data
2. Machine Learning model parameters and tuning the same
3. Integration of RASA NLU with the project and firing up the python interface
4. UI based glitches, took a lot of time to fix
5. The Recommender System  for diet had to be trained on GPU's for superior accuracy, hence expensive and time taking. 

## Accomplishments that we're proud of

When finding datasets for our menstrual phase prediction ml model we discovered that there were very few datasets relating to women's menstrual health present on Kaggle or any other such platform highlighting the huge lack of data in the healthcare industry when concerning a problem faced only by women. We decided to change that by allowing the user to opt in to anonymously share their symptoms data to our mongo DB cloud server. This data can later be accessed by researchers.
## What we learned

Through this project 
1. We learned teamwork without knowing anyone to hours of effective ideation
2. Solving Real World problems efficiently and effectively
3. Connecting many several microservices together
4. The need for data to be available at almost every plausible field
5. Machine Learning and Deep Learning incorporation with web apps 

## What's next for FemPower

WORKOUT PLANNER AND MONITOR 

Physical activity and exercise have many immediate and long-term health benefits. Most importantly, regular activity can improve your quality of life. A minimum of 30 minutes a day can allow you to enjoy these benefits. So, in our application we have a workout planner that gives you a set of exercises, shows you how to do them and then checks if you are doing them correctly. Our posture detection system will check if you are doing correctly and when the set count gets over, it moves on to the next exercise. Thereby ensuring your fitness and physical health. 

HEART RATE MONITORING SYSTEM 

Our application has an unique heart rate monitoring system, which is a non-contact based system to measure Heart Rate using real-time application using camera. Heart Rate (HR) is one of the most important Physiological parameter and a vital indicator of people‘s physiological state. The main principle is to extract heart rate information from facial skin color variation caused by blood circulation to monitor the user’s‘ physiological state Detect face, align and get ROI using facial landmarks Apply band pass filter with fl = 0.8 Hz and fh = 3 Hz, which are 48 and 180 bpm respectively Average color value of ROI in each frame is calculate pushed to a data buffer which is 150 in length FFT the data buffer. The highest peak is Heart rate Amplify color to make the color variation visible 


REALTIME GROUP YOGA POSTURE MONITORING SYSTEM 

In these difficult times, mental as well as physical health need to be looked into. Hence, our application is at the service with a yoga monitoring system, where multiplayers can join and share their video and audio. A particular yoga posture would be displayed to the users at a time, and the users have to do yoga as displayed in the posture. Our posture detection system would run in the background for each user and score them real-time based on their accurate performance, and finally declare a winner in the end. Thus physical health is monitored as well mental health is maintained by social connection in this unique effort. 

DEPRESSION CHATBOT 

In today’s pandemic situation, when everyone is at home, mental health has become an even more important thing to focus on. That is why our application comes with a depression chatbot which serves as the patient’s listener in these time of crisis. And using our NLP Sentiment analysis models trained in the backend on tensorflow, it supports and cheers the person up person based on all the conditions they have mentioned. It suggests some appropriate quotes about life, love and family. It also suggests some songs that can uplift user moods and help get over the hard times. Hence, it reduces the mental stress or worry a person goes through especially on low days. 

WORKOUT PLANNER AND POSTURE DETECTOR 

In today’s pandemic situation, when everyone is at home, physical health has also become an important aspect to focus on. Thus our workout planner comes with a posture detector where certain exercise poses are taught to the user, and they have to try their best to attain that pose. There is a unique timer attached with each pose maintaining the exercise duration which has to be completed before going to the next exercise. There is also a scoring system based on the posture detection system running in real-time in the background. 

MICROSERVICE FOR RESERACHERS to access women data and research on them accurately. It will be an open anonymous database.
