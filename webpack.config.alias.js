const path = require("path");

/**
 * Function to return the main Application Path
 * @return {String} the resultant path
 *
 */
function getAppPath() {
	return path.resolve("./");
}

/**
 * Function to get src folder path and the folders present inside src
 * src folder contains the main source code and business logic of our application
 *
 * @param {string} folderName The folderName you want to join
 * @return {String} the resultant path
 *
 */
function getSrcAndFoldersPath(folderName = "") {
	let srcPath = "./src";

	if (folderName.length > 0) {
		// Using path.join for preserving cross-platform
		// Please don't use normal string paths to avoid slash errors
		srcPath = path.join(srcPath, folderName);
	}

	return path.resolve(srcPath);
}

module.exports = {
	resolve: {
		alias: {
			"@app": getAppPath(),
			"@src": getSrcAndFoldersPath(),
			"@actions": getSrcAndFoldersPath("actions"),
			"@assets": getSrcAndFoldersPath("assets"),
			"@common": getSrcAndFoldersPath("common"),
			"@components": getSrcAndFoldersPath("components"),
			"@atomicComponents": getSrcAndFoldersPath(path.join("components", "atomic")),
			"@functionalComponents": getSrcAndFoldersPath(path.join("components", "functional")),
			"@structuralComponents": getSrcAndFoldersPath(path.join("components", "structural")),
			"@hookComponents": getSrcAndFoldersPath(path.join("components", "hooks")),
			"@containers": getSrcAndFoldersPath("containers"),
			"@exceptions": getSrcAndFoldersPath("Exceptions"),
			"@layout-config": getSrcAndFoldersPath("layout-config"),
			"@routing": getSrcAndFoldersPath("routing"),
			"@reducers": getSrcAndFoldersPath("reducers"),
			"@sagas": getSrcAndFoldersPath("sagas"),
			"@selectors": getSrcAndFoldersPath("selectors"),
			"@services": getSrcAndFoldersPath("services"),
			"@third-party": getSrcAndFoldersPath("third-party"),
			"@store": getSrcAndFoldersPath("store"),
			"@utils": getSrcAndFoldersPath("utils"),
			"@theme": getSrcAndFoldersPath(path.join("utils", "theme")),
			"@views": getSrcAndFoldersPath("views")
		},
		modules: [getSrcAndFoldersPath(), "node_modules"]
	}
};
