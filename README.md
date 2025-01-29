
# CGPA to German Grade Converter

**Convert your Indian CGPA (out of 10) to the German grading system easily!**

🔗 **Live Demo:** [sydubaid.github.io/cgpa-to-german-grade](https://sydubaid.github.io/cgpa-to-german-grade/)

## Features
- Simple & easy-to-use interface
- Instant conversion from Indian CGPA to the German grading system
- Input validation for accurate results

## How It Works
The German grade is calculated using this formula:  
\[	ext{German Grade} = 1 + 3 	imes \left(rac{	ext{Max CGPA} - 	ext{Your CGPA}}{	ext{Max CGPA} - 	ext{Min CGPA}}
ight)\]  
- **Max CGPA:** 10  
- **Min CGPA:** 4  

## Usage
1. Enter your CGPA (between 0 and 10).  
2. Click **Calculate**.  
3. View your German equivalent grade instantly.

## Installation (For Local Development)
To run this project locally:

```bash
# Clone the repository
git clone https://github.com/sydubaid/cgpa-to-german-grade.git

# Navigate into the project folder
cd cgpa-to-german-grade

# Install dependencies
npm install

# Start the development server
npm start
```
The app will be available at **http://localhost:3000/**

## Project Structure
```
cgpa-to-german-grade/
│── src/
│   ├── components/
│   │   └── GradeCalculator.js  # Main component for conversion
│   ├── App.js                  # Main app file
│   ├── index.js                # Entry point
│── public/
│── package.json                # Dependencies & scripts
│── README.md                   # Project documentation
```

## Contributing
Feel free to fork the repo and submit pull requests with improvements!

📩 **Contact:** If you have any questions, reach out via GitHub Issues.
