# Pest-Defender-App-using-AI-for-Agriculture

# 🌱 Pest Defender AI

**Pest Defender AI** is an AI-powered mobile and web application designed to help farmers identify crop pests, receive treatment recommendations, and prevent crop damage through intelligent pest detection and seasonal predictions.

The application uses Artificial Intelligence and Computer Vision to analyze pest images, classify pests, provide control methods, and generate early warnings based on environmental and seasonal conditions.

---

## 📌 Features

- 🔍 AI-based pest identification using uploaded images
- 📷 Camera and gallery image support
- 🌾 Crop-specific pest detection
- 🤖 Deep Learning image classification
- 📊 Seasonal pest prediction
- ⚠️ Early warning notifications
- 💊 Recommended pesticides and organic control methods
- 📚 Pest encyclopedia with detailed information
- 📍 Location-based pest alerts
- 📈 Detection history and analytics
- 👤 Farmer profile management

---

## 🏗️ System Architecture

```
User
   │
   ▼
Frontend (Flutter / React)
   │
   ▼
Django REST API
   │
   ├─────────────┐
   ▼             ▼
AI Model     PostgreSQL
(Image        Database
Classification)
```

---

## 🛠️ Tech Stack

### Frontend
- Flutter / React
- HTML
- CSS
- JavaScript

### Backend
- Python
- Django
- Django REST Framework

### Database
- PostgreSQL

### AI & Machine Learning
- TensorFlow
- Keras
- OpenCV
- NumPy
- Scikit-learn

### Development Tools
- VS Code
- Git
- GitHub
- Postman

---

## 📂 Project Structure

```
Pest-Defender-AI/
│
├── backend/
│   ├── api/
│   ├── models/
│   ├── views/
│   ├── serializers/
│   ├── urls.py
│   └── settings.py
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── ai_model/
│   ├── dataset/
│   ├── training/
│   ├── model/
│   └── prediction.py
│
├── media/
├── static/
├── requirements.txt
├── README.md
└── .gitignore
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/pest-defender-ai.git
cd pest-defender-ai
```

### Create Virtual Environment

```bash
python -m venv venv
```

Activate

Windows

```bash
venv\Scripts\activate
```

Linux/Mac

```bash
source venv/bin/activate
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Configure Database

Update the PostgreSQL credentials in:

```
settings.py
```

Example

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "pest_defender",
        "USER": "postgres",
        "PASSWORD": "password",
        "HOST": "localhost",
        "PORT": "5432",
    }
}
```

### Run Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Start Server

```bash
python manage.py runserver
```

---

## 🧠 AI Workflow

1. Farmer uploads a pest image.
2. Image is preprocessed.
3. AI model extracts image features.
4. Pest is classified.
5. Disease and pest information are retrieved.
6. Recommended treatment is generated.
7. Seasonal risk is predicted.
8. Results are displayed to the farmer.

---

## 📸 Future Improvements

- Real-time camera detection
- Drone-based pest monitoring
- IoT sensor integration
- Weather API integration
- Multilingual support
- Voice assistant
- Offline AI inference
- Yield prediction
- Smart irrigation integration

---

## 🎯 Objectives

- Detect pests using Artificial Intelligence
- Reduce crop losses
- Assist farmers with quick pest identification
- Recommend effective pest control methods
- Improve agricultural productivity
- Promote sustainable farming practices

---

## 📊 Expected Results

- High pest detection accuracy
- Faster identification than manual methods
- Improved decision-making
- Reduced pesticide misuse
- Better crop health
- Increased agricultural productivity

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Vishnu Prasad**

B.Tech Computer Science Engineering

Backend Developer | AI & Machine Learning Enthusiast | Data Engineering Learner

GitHub: https://github.com/yourusername

Email: your-email@example.com

---

### ⭐ If you like this project, give it a Star on GitHub!
