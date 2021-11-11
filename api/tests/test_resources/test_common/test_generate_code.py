from api.common.generate_code import generate_code


def test_improper_json():
    request = "this is a string not json"
    res = generate_code(request)
    print(res)
    assert res is None
