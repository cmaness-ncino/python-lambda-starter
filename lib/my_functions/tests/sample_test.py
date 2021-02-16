import app
def test_lambda_handler():
    assert app.lambda_handler("test", "test") == "This is a Lambda Function defined through CDK"