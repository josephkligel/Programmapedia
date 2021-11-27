# Opencv Guidance

opencv: use 'import cv2' statement and make sure to use xml detector file

## Methods:
-cv2.CascadeClassifier(<Haarcascade XML file for faces>)
-cv2.imread(<singleimagefile>)
-cv2.cvtColor(<singleimagevar>, cv2.COLOR_BGR2GRAY): Converts the image to grayscale
-detect.detectMultiScale(<convertedgrayimage>, 1.20, 5)
-for (x, y, w, h) in face:
        cv2.rectangle(<singleimagevar>, (x, y), (x+w, y+h), (0, 255, 0), 2)
-cv2.imshow("Detect Multiple Images", <singleimagevar>)
-cv2.waitKey(2000)
-cv2.destroyAllWindows()
