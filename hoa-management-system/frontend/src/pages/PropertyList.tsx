import api from "../utils/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Property } from "../utils/hoa_types";
import { useState } from "react";

import PropertyForm from "./PropertyForm";
import Modal from "../components/Modal";

export default function PropertyList() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(
    null
  );
  const queryClient = useQueryClient();

  // #region Get Properties from Database
  const getProperties = async () => {
    const response = await api.get("/properties");
    return response.data;
  };
  const {
    data: properties = [],
    isLoading,
    isError,
    error,
  } = useQuery<Property[]>({
    queryKey: ["properties"],
    queryFn: getProperties,
  });
  // #endregion Get Properties from Database

  // #region delete property from Database
  const deleteMutationFn = async (id: number) => {
    await api.delete(`properties/${id}`);
  };
  const { mutate: deleteMutate } = useMutation({
    mutationFn: deleteMutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["properties"] }),
  });

  function handleDeletePropery(propertyId: number) {
    if (!confirm("Delete this property?")) return;
    deleteMutate(propertyId);
  }
  // #endregion delete property from Database

  function handleAddProperty() {
    setSelectedPropertyId(null);
    setIsModalOpen(true);
  }
  function handleEditProperty(id: number) {
    setSelectedPropertyId(id);
    setIsModalOpen(true);
  }
  return (
    <div>
      <h1>Properties</h1>
      {isLoading && <p>Loading Properties...</p>}
      {isError && (
        <p style={{ color: "red" }}>Error: {(error as Error).message}</p>
      )}

      <button id="addPropertyButton" onClick={handleAddProperty}>
        Add Property
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>Currency</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {properties?.map((property: Property) => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.address}</td>
              <td>{property.city}</td>
              <td>{property.currency}</td>
              <td>
                <button
                  id="editProperty"
                  onClick={() => handleEditProperty(property.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  id="deleteProperty"
                  onClick={() => handleDeletePropery(property.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <PropertyForm
            selectedPropertyId={selectedPropertyId}
            onSave={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
      {/* <ReactModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <PropertyForm
          propertyId={selectedPropertyId}
          onSave={setIsModalOpen(false)}
        />
      </ReactModal> */}
    </div>
  );
}
