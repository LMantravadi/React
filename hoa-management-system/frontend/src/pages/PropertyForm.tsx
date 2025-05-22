import { useQueryClient, useMutation, useQuery } from "@tanstack/react-query";

import { useEffect, useState, type FormEvent } from "react";
import api from "../utils/api";
import type { Property } from "../utils/hoa_types";

interface Props {
  selectedPropertyId: number | null;
  onSave(): void;
}
export default function PropertyForm({ selectedPropertyId, onSave }: Props) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [currentProperty, setCurrentProperty] = useState<Property | null>(null);

  const queryClient = useQueryClient();

  const getPropertyById = async (id: number | null) => {
    if (id) {
      const response = await api.get(`/properties/${id}`);
      return response.data;
    } else throw new Error("Select a property");
  };

  const {
    data,
    error: fetchDataError,
    isLoading,
    isError: isFetchError,
  } = useQuery<Property>({
    queryKey: ["property", selectedPropertyId],
    queryFn: () => getPropertyById(selectedPropertyId),
    enabled: !!selectedPropertyId,
  });

  const createOrEditProperty = async (): Promise<Property> => {
    const { id, ...body } = currentProperty!;
    const response = isEditMode
      ? await api.put(`/properties/${selectedPropertyId}`, body)
      : await api.post(`/properties`, body);
    return response.data;
  };
  const {
    mutate: createOrEditMutate,
    isPending: isSaving,
    isError: isSaveError,
    error: saveError,
  } = useMutation({
    mutationFn: createOrEditProperty,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
      onSave();
    },
  });

  useEffect(() => {
    setIsEditMode(!!selectedPropertyId);
    if (data) {
      //edit mode
      setCurrentProperty(data);
    } else if (selectedPropertyId === null) {
      // create mode
      const newProperty: Property = {
        id: 0,
        name: "",
        address: "",
        city: "",
        currency: "",
      };
      setCurrentProperty(newProperty);
    }
  }, [selectedPropertyId, data]);

  function handleChange(key: keyof Property, value: string) {
    if (!currentProperty) return;
    setCurrentProperty({ ...currentProperty, [key]: value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    createOrEditMutate();
  }

  if (isLoading) return <p>Loading form…</p>;
  if (isFetchError)
    return <p style={{ color: "red" }}>{(fetchDataError as Error).message}</p>;
  if (!currentProperty) return null;
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset disabled={isSaving}>
          <h1>Property Form</h1>
          <label htmlFor="propertyName">Name: </label>
          <input
            id="propertyName"
            disabled={isLoading}
            value={currentProperty?.name ?? ""}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <label htmlFor="propertyAddress">Address: </label>
          <input
            id="propertyAddress"
            disabled={isLoading}
            value={currentProperty?.address ?? ""}
            onChange={(e) => handleChange("address", e.target.value)}
          />
          <label htmlFor="propertyCity">City: </label>
          <input
            id="propertyCity"
            disabled={isLoading}
            value={currentProperty?.city ?? ""}
            onChange={(e) => handleChange("city", e.target.value)}
          />
          <label htmlFor="propertyCurrency">Currency: </label>
          <input
            id="propertyCurrency"
            disabled={isLoading}
            type="number"
            value={currentProperty?.currency ?? ""}
            onChange={(e) => handleChange("currency", e.target.value)}
          />
          {isSaveError && (
            <p style={{ color: "red" }}>{(saveError as Error).message}</p>
          )}
          <button type="submit" disabled={isSaving}>
            {isEditMode ? "Update" : "Create"} Property
          </button>
        </fieldset>
      </form>
    </>
  );
}
