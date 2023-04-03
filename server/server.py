from flask import Flask, request, jsonify
import util
app = Flask(__name__)




@app.route('/predict_student_grade', methods=['GET', 'POST'])
def predict_student_grade():
    age = int(request.form['age'])
    medu = int(request.form['motheredu'])
    fedu = int(request.form['fatheredu'])
    traveltime = float(request.form['travel'])
    studytime= float(request.form['study'])
    freetime= float(request.form['freetime'])
    goout= float(request.form['goout'])
    g1= int(request.form['g1'])
    g2= int(request.form['g2'])
    g3= int(request.form['g3'])

    response = jsonify({
        'estimated_grade': util.get_estimated_grades("age", "medu", "fedu", "traveltime", "studytime", "freetime", "goout", "g1", "g2", "g3", "letter_grade")
    })
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == "__main__":
    print("Starting Python Flask Server For Student Grade Prediction...")
    util.load_saved_artifacts()
    app.run()