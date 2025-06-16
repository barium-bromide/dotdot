package main

import (
	"fmt"
	"net/http"
)

func main() {
	// Serve static files from the current directory
	http.Handle("/", http.FileServer(http.Dir(".")))

	// Start the server on port 8080
	fmt.Println("Server is running on http://localhost:8080")

	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		fmt.Println("Error starting server:", err)
	}
}
