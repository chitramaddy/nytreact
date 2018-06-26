import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment";

class Saved extends Component {
	state = {
		articles : []
	}

	componentDidMount() {
		this.getSavedArticles();
	}

	getSavedArticles = () => {
		API.articleRetrieve()
			.then(res => this.setState({ articles: res.data }))
			.catch(err => console.log(err))
	}

	deleteArticle = id => {
		API.articleDelete(id)
			.then(() => this.getSavedArticles())
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div>
				<div className="jumbotron jumbotron-fluid py-5">
					<div className="row align-items-center justify-content-center my-5">
						<h1>Saved Articles</h1>
					</div>
				</div>

				<div className="container-fluid">
					<div className="row justify-content-center">

						<div className="col-8">
							<h2>{this.state.articles.length
								? "Saved Articles Results"
								: "No saved articles to display"}</h2>

							<ul className="list-group list-group-flush">
								{this
									.state
									.articles
									.map(article => (
										<li key={article._id} className="list-group-item d-flex justify-content-between align-items-center">
											<a href={article.url} target="_blank">{article.title} - {moment(article.date).format("Do MMM YYYY hh:mm:ss a")}</a>
											<span className="badge badge-primary badge-pill" onClick={() => this.deleteArticle(article._id)}>Delete Article</span>
										</li>
									))}
							</ul>
						</div>
					</div>

				</div>
			</div>
		)

	}
}

export default Saved;
