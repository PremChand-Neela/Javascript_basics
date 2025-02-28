import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const App = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [response, setResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [error, setError] = useState("");

  const backendUrl = "https://your-backend-url.com/bfhl"; // Replace with actual backend URL

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      if (!parsedInput.data || !Array.isArray(parsedInput.data)) {
        throw new Error("Invalid JSON format. 'data' should be an array.");
      }
      setError("");
      
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsedInput),
      });
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setError(error.message);
      setResponse(null);
    }
  };

  const handleFilterChange = (selectedValues) => {
    setSelectedFilters(selectedValues);
  };

  const renderFilteredResponse = () => {
    if (!response) return null;
    
    const filteredData = {};
    selectedFilters.forEach((filter) => {
      if (response[filter]) {
        filteredData[filter] = response[filter];
      }
    });
    return JSON.stringify(filteredData, null, 2);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Bajaj Health Dev Challenge</h1>
      <Card className="w-full max-w-md p-4">
        <CardContent>
          <Input
            type="text"
            placeholder='Enter JSON (e.g. { "data": ["A", "1", "B"] })'
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="mb-2"
          />
          <Button onClick={handleSubmit} className="w-full">Submit</Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </CardContent>
      </Card>
      {response && (
        <Card className="w-full max-w-md mt-4 p-4">
          <CardContent>
            <Select multiple onChange={handleFilterChange} className="mb-2">
              <SelectItem value="numbers">Numbers</SelectItem>
              <SelectItem value="alphabets">Alphabets</SelectItem>
              <SelectItem value="highest_alphabet">Highest Alphabet</SelectItem>
            </Select>
            <pre className="bg-gray-100 p-2 rounded">{renderFilteredResponse()}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default App;
