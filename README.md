# Django Rest Framework Todo App

A Simple Django React Todo list generator. Here frontend and backend are totally separate. They are connected with Rest Api.

## Deploying on Local Development Server

Must need python>=3.6 and pipenv pre-installed. Clone the repo. Open terminal into that cloned repo. Then install dependency and activate env.

```bash
git clone https://github.com/coderhasanrakib/django-react-todo-Separate.git
cd django-react-todo-Separate
cd backend
pipenv install
pipenv shell
```

Then migrate database and runserver. 

```bash
python manage.py migrate
python manage.py runserver
```
This will serve our api endpoint.

Then open another terminal. Go to the frontend directory. Install dependencies and run the frontend server.
```bash
cd frontend
npm install
npm start
```
This will start a frontend web app in default browser. Enjoy the app.


## Contributors
* **Rakib Hasan** - *Initial work* - [codewithrakib](https://github.com/codewithrakib)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
