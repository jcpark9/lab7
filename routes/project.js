var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

  models.Project.find({_id: projectID}, afterQuery);
  // query for the specific project and
  // call the following callback

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;

  var newProject = new models.Project({
    title: form_data.project_title,
    image: form_data.image_url,
    date: form_data.date,
    summary: form_data.summary
  });
  console.log(form_data);
  newProject.save(function() {
    res.send();
  });

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;
  models.Project.remove({_id: projectID}, function() {
    res.send();
  });

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}