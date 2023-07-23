import { useCallback, useState } from "react";

export default function useProcessando() {
    const [processando, setProcessando] = useState<boolean>(false);

    const alternar = useCallback(function() {
      setProcessando(atual => !atual);
    }, [])
    const iniciarProcessamento = useCallback(function() {
      setProcessando(true);
    }, [])
    const finalizarProcessamento = useCallback(function() {
      setProcessando(false);
    },[])

    return {
        alternar,
        processando,
        iniciarProcessamento,
        finalizarProcessamento
    }
}